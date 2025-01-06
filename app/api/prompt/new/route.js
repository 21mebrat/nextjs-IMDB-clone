import promptModel from "@models/prompt.model"
import { connectToDb } from "@utils/connectToDb"
 export const POST = async (req) => {
    const { tag, prompt, userId } = await req.json()
    try {
        await connectToDb()
        const newPrompt = new promptModel({
            userId,
            tag,
            prompt
        })
        await newPrompt.save()
        console.log(newPrompt,'new prompt')
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response('Failed To create',{status:500})
    }
}
