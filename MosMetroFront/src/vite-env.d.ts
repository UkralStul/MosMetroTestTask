/// <reference types="vite/client" /> //

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.png' {
    const value: string;
    export default value;
}

