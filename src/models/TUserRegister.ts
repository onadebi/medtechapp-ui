type TUserRegister = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    MedicBranchId: number;
    medicCompanyId: number;
    SalutationId: number;
    GenderCategoryId: number;
    UserGroupIds: number[]
}

export default TUserRegister;