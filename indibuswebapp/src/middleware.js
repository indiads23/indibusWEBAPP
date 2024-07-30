import { NextResponse } from "next/server";

export function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/' || path === '/adminlogin' || path === '/contactUs' || path === '/interprice' || path === '/services';
    
    const token = request.cookies.get('token') || '';
    console.log(`Token: ${token}`);

    if (isPublicPath) {
        // Allow access to public paths regardless of token
        return NextResponse.next();
    }

    if (!token) {
        // Redirect to login if token is missing for protected routes
        return NextResponse.redirect(new URL('/adminlogin', request.nextUrl));
    }

    // Allow access to private paths if token is present
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dataTable',
        '/changepassword'
    ]
};

// import { NextResponse } from "next/server";

// export function middleware(request){
//     const path = request.nextUrl.pathname

//     const isPublicPath =path ==='/' || path === "/adminlogin" || path === "/contactUs" || path === "interprice" || path === "/services"
    
//     const token = request.cookies.get('token') || ''
//     console.log(token);
//     if(isPublicPath || token){
//         return NextResponse.redirect(new URL(`/`,request.nextUrl))
//     }

//     if (!isPublicPath && !token) {
//         return NextResponse.redirect(new URL('/adminlogin', request.nextUrl))
//     }
// }

// export const config = {
//     matcher:[
//         '/dataTable',
//         '/changepassword'
//     ]
// }