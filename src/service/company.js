import { nanoid } from "nanoid";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../util/db";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

export class Company {
  constructor(
    id,
    name,
    email,
    details,
    shortDescription,
    longDescription,
    missionStatement
  ) {
    this.id = id || nanoid();
    this.companyName = name || "";
    this.emailCompany = email || "";
    this.companyDetails = details || "";
    this.longDescription = longDescription || "";
    this.shortDescription = shortDescription || "";
    this.missionStatement = missionStatement || "";
  }

  static async findOne(id) {
    const docRef = doc(db, "Company", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists) return docSnap.data();
  }

  async updateOne(params) {
    const {
      email,
      description,
      longDescription,
      missionStatement,
      image,
      name,
      companyDetails,
    } = params;

    return new Promise(async (res, rej) => {
      try {
        const docRef = doc(db, "Company", this.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const company = docSnap.data();
          const docs = company.DDDocs;

          let newDDDocs = { ...docs };
          newDDDocs = { ...newDDDocs, ["emailCompany"]: email };
          newDDDocs = { ...newDDDocs, ["longDescription"]: longDescription };
          newDDDocs = { ...newDDDocs, ["mission"]: missionStatement };
          newDDDocs = { ...newDDDocs, ["shortDescription"]: description };
          const _image = image
            ? await this.uploadImage(image)
            : company.companyImage || "";

          await updateDoc(docRef, {
            companyName: name,
            companyDetails: companyDetails,
            DDDocs: newDDDocs,
            companyImage: _image,
          });

          res();
        } else {
          rej(new Error("Company Not Found"));
        }
      } catch (error) {
        rej(error);
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
