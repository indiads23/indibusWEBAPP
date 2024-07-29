import { NextResponse } from "next/server";

export function middleware(request){
    const path = request.nextUrl.pathname

    isPublicPath = path === "/adminlogin" || path === "/contactUs" || path === "interprice" || path === "/services"
    
    const token = request.cookies.get('token')?.value || ''

    if(isPublicPath || token){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/adminlogin', request.nextUrl))
    }
}

export const config = {
    matcher:[
        '/',
        '/adminlogin',
        '/contactUs',
        '/interprice',
        "/services"
    ]
}