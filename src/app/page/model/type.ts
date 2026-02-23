export interface CustomerModel{
    id: string;
    title: string;
    name: string;
    dob: string;
    salary: number;
    address: string;
    city: string;
    province: string;
    postalCode: string;
}

export interface ItemModel{
    id: string;
    description: string;
    packSize: string;
    unitPrice: number;
    qty: number;

}