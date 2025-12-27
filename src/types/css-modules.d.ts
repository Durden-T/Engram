/**
 * CSS Modules 类型声明
 * 
 * 告诉 TypeScript 如何处理 .module.css 文件的导入
 * 每个 CSS 模块被视为一个对象，其键是类名，值是字符串
 */

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}

// 普通 CSS 文件（非 module）也可以导入
declare module '*.css' {
    const content: string;
    export default content;
}
