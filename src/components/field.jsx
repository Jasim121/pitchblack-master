import { makeStyles, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => {
    return {
        label: {
            fontSize: 14,
            color: '#8F92A1',
            fontWeight: 400,
        },
        fieldContainer: {
            width: '100%',
            marginBottom: 20,
            '& > *': {
                width: '100%',
            },
            '& > *:not($label)': {
                fontSize: 20,
                fontWeight: 'bold',
            },
        },
    };
});

export const Field = ({ label, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.fieldContainer}>
            <Typography className={classes.label}>{label}</Typography>
            {children}
        </div>
    );
};
