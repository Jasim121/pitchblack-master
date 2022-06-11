import { useEffect, useMemo, useRef, useState } from 'react';
import { Keys } from '../utils/keys';

export const usePagination = (query, modifier) => {
    const lastDoc = useRef(null);

    const listeners = useRef([]);

    const [state, setState] = useState({
        data: [],
        loading: false,
    });

    const fetch = useMemo(
        () => async () => {
            try {
                const docRefs = await query.startAfter(lastDoc.current).limit(Keys.PAGE_SIZE).get();

                listeners.current.push(
                    query
                        .startAfter(lastDoc.current)
                        .limit(Keys.PAGE_SIZE)
                        .onSnapshot(snapshot => {
                            const cache = snapshot
                                .docChanges()
                                .filter(change => change.type == 'modified')
                                .map(el => el.doc.data())
                                .reduce((acc, el) => {
                                    acc[el.id] = el;
                                    return acc;
                                }, {});

                            if (!Object.keys(cache)) return;

                            setState(prev => {
                                return { ...prev, data: prev.data.map(el => cache[el.id] || el) };
                            });
                        }),
                );

                let docs = docRefs.docs.map(el => el.data());
                if (modifier) {
                    docs = await modifier(docs);
                }

                const _data = [...state.data, ...docs];

                setState(prev => ({ ...prev, data: _data }));
                lastDoc.current = docRefs.docs[docRefs.docs.length - 1];

                return !!docs.length;
            } catch (error) {
                console.log(error);
            }
        },
        [query, state.data],
    );

    const init = async () => {
        setState(prev => ({ ...prev, loading: true }));
        await fetch();
        setState(prev => ({ ...prev, loading: false }));
    };

    useEffect(() => {
        init();

        return () => {
            setState({
                data: [],
                loading: false,
            });
            listeners.current.forEach(el => el());
            lastDoc.current = null;
        };
    }, [query]);

    return {
        ...state,
        loadMore: fetch,
    };
};
