

import { commonAPI } from "./comonAPI"
import { SERVER_URL } from "./serverurl"

//upload new video

export const uploadVideoAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}

//get allUploadedVideos

export const getallUploadedVideos = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}


//get a VideoAPI

export const getaVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos/${id}`,"")
}

//add video to history

export const addvideohistoryAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//get history

export const gethistory = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//delete history

export const deletehistory = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}


//delete video

export const deletevideo = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
}

//add video to category

export const addcategoryAPI = async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

//get category

export const getcategory = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

//delete category

export const deletecategory = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

//update category

export const updatecategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}
