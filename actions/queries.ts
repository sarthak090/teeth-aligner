'use server'

export const getGlobalData = async () => {
    const url=process.env.NEXT_PUBLIC_CMS_URL + '/custom/v1/global-data'
 
    const res = await fetch(url)

    const data = await res.json()
    return data
}

export const getHomePageData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/pages/53?acf_format=standard`)
    const data = await res.json()
    return data
}


export const getAboutPageData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/pages/263?acf_format=standard`)
    const data = await res.json()
    return data
}

export const getInclinicPackageData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/products/201?acf_format=standard`)
    const data = await res.json()
    return data
}

export const getPageDataById = async (id:string)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/pages/${id}?acf_format=standard`)
    const data = await res.json()
    return data
}

export const getAllPages = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/pages`)
    const data = await res.json()
    return data
}

export const getPageDataBySlug = async (slug:string)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/pages?slug=${slug}`)
    const data = await res.json()
    return data
}

export const getBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/posts?acf_format=standard`)
    const data = await res.json()
    return data
}

export const getBlogBySlug = async (slug:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/posts?slug=${slug}`)
    const data = await res.json()
    return data
}

export const postContactForm = async (data:{
    full_name:string
    email:string;
    phone_no:string;
    message:string;

}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/contacts`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const response = await res.json()
    return response
}