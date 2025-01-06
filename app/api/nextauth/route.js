import userModel from '@models/user.model'
import { connectToDb } from '@utils/connectToDb'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: ''
        })
    ],
   callbacks:{
    async session({ session }) {
        try {
            const sessionUser = await userModel.findOne({ email: session.user.id })
            session.user.id = sessionUser._id.toString()
            return session
        } catch (error) {
            console.log(error)
        }
    },
    async signIn({ profile }) {
        try {
            await connectToDb()
            //check is the user exits or not 
            const user = await userModel.findOne({ email: profile.email })
            if (!user) {
                await user.create({
                    email: profile.email,
                    userName: profile.name.replace(" ", '').toLowerCase(),
                    image: profile.picture
                })
            }

            console.log('connected')
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
   }

}) 

export { handler as GET, handler as POST }