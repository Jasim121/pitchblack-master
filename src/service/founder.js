import { nanoid } from "nanoid";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../util/db";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

export class Founder {
  constructor(id, name, email, companies) {
    this.id = id || nanoid();
    this.name = name || "";
    this.email = email || "";
    this.companies = companies || [];
    //  this.longDescription = "",
  }

  static async findOne(id) {
    const docRef = doc(db, "Founder", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
  }

  async addCompany(payload) {
    this.companies.push(payload);
    const ref = doc(db, "Founder", this.id);
    await updateDoc(ref, {
      companies: this.companies,
    });
  }

  async fetchCompanyId() {
    const docRef = doc(db, "Founder", this.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data().companies[0].id;
    }
  }

  async updateOne(companyId, params) {
    const { description, longDescription, role, image, name, email } = params;

    return new Promise(async (res, rej) => {
      try {
        
        const founderRef = doc(db, "Founder", this.id);
        await updateDoc(founderRef, {
          name: name,
        });
        const companyRef = doc(db, "Company", companyId);
        const docSnap = await getDoc(companyRef);

        if (docSnap.exists()) {
          let company = docSnap.data();
          const _founders = [...company.founderDescription];
          const founder = _founders.find((item) => item.id == this.id);
          if (!founder) rej(new Error("No founder found"));
          founder.email = email || "";
          founder.longDescription = longDescription || "";
          founder.description = description || "";
          founder.role = role || "";
          founder.profilePicture = image
            ? await this.uploadImage(image)
            : founder.profilePicture || "";
          await updateDoc(companyRef, {
            founderDescription: _founders,
          });

          res();
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  uploadImage(payload) {
    return new Promise((res, rej) => {
      if (!payload || typeof payload == "string") return;

      const storage = getStorage();

      const storageRef = ref(
        storage,
        `${this.id}/profilePictures/${payload.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, payload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log("error occurred", error);
          rej(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            res(downloadURL);
          });
        }
      );
    });
  }

  getCompany(id) {
    return this.companies.find((el) => el.id === id);
  }

  getDTO() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      companies: this.companies,
    };
  }

  static getBase54(payload) {
    return new Promise((res, rej) => {
      try {
        const reader = new FileReader();
        reader.onloadend = function () {
          console.log("RESULT", reader.result);
          res(reader.result);
        };
        reader.readAsDataURL(payload);
      } catch (error) {
        rej(error);
      }
    });
  }
}
