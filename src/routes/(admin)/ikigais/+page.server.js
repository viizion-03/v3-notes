import {databases} from "$lib/index.js"
import { ikigasCollectionId, v3AdminDbId } from "$lib/constants.js"

export const actions = {

    trash : async ({request}) => {
        const formData = Object.fromEntries(await request.formData())
        const documentId = formData.ideaId
        try {
            await databases.deleteDocument(v3AdminDbId, ikigasCollectionId, documentId )
            return {success : true, message: "You'll never see it again"}            
        } catch (error) {
            console.log(error)
            return fail(501, {error: "Could not trash the Idea, try again later"})
        }
    },

    save : async ({request}) => {
        const formData = Object.fromEntries(await request.formData())
        const documentId = formData.ideaId


        try {
            databases.updateDocument(v3AdminDbId, ikigasCollectionId,documentId,{idea: formData.idea} )
            return {success : true, message: "Idea is in the bag"}
        } catch (error) {
           console.log(error) 
           return fail(501, { ...formData, error: ""})
        }
    }
}