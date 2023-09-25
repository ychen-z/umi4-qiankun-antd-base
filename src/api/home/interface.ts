export interface IUserRoleItem {
  id: number;
  name: string;
  nameCn: string;
}

export interface IUserInfo {
  id: number;
  userId: number;
  userName: string;
  uNo: string; // 工号
  name: string;
  superAdmin: boolean;
}

export interface IDeptItem {
  default: boolean;
  hasChildren: boolean;
  childList: IDeptItem[];
  children?: IDeptItem[];
  id: string;
  name: string;
  nameEn: string;
  parentId?: string;
  level: number;
  deptLeaderUNo: string;
  deptPath: string;
}

export interface IVirtualDeptItem {
  default: boolean;
  hasChildren: boolean;
  children?: IVirtualDeptItem[];
  isRealDept: boolean;
  virDeptCode: string;
  parentId?: string;
  parentRealDept?: string;
  virDeptName: string;
}
