import promptModel from "@models/prompt.model"
import { connectToDb } from "@utils/connectToDb"

export const GET = async (request) => {
    try {
        await connectToDb()
        const prompt = await promptModel.find({})
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response('Failed to fetch prompts', { status: 500 })
    }

}  