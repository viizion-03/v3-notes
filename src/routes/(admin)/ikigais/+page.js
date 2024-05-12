import { Databases, Query } from "appwrite";
import { client } from "$lib/index.js";

export const load = ({ fetch }) => {
  const databases = new Databases(client);

  async function fetchDocs() {
    const data = await databases.listDocuments(
      "6564bbd9b375f57e0749",
      "6564bbe02f73d9128ead"
    );

    return data;
  }

  const fetchUnAttendedIkigai = async () => {
    const data = await databases.listDocuments(
      "6564bbd9b375f57e0749",
      "6564bbe02f73d9128ead",
      [Query.isNull("businessIdea")]
    );
    return data;
  };

  return {
    ikigais: fetchDocs(),
    emptyIkigai: fetchUnAttendedIkigai(),
  };
};

