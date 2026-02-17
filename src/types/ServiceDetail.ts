export type ServiceDetail = {
    label:string;
    description:string;
    details?:string[];
    categorie?:Array<{
        name:string;
        details:string[];
    }>
}

