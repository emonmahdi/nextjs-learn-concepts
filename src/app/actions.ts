
export async function submitContactForm(prevState: any, formData: FormData){
    const name = formData.get('name')
    const email = formData.get('email')

    if(!name || !email){
        return{message:'Give name and email', success: false}
    }

    return {message:'Form submit successfully', success: true}
}