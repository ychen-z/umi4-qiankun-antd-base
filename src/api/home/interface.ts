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
  corpMail: string;
  defaultDeptId: string;
  deptId: string;
  deptL1Id: string;
  deptL1Name: string;
  deptL2Id: string;
  deptL2Name: string;
  deptL3Id: string;
  deptL3Name: string;
  deptL4Id: string;
  deptName: string;
  deptNameStr: string;
  deptPath: string;
  empLevel: string;
  empType: string;
  hasLeader: boolean;
  hasPartner: boolean;
  hasUndered: boolean;
  hasVO: boolean;
  ifAttentioned: boolean;
  isGrayscaleUser: boolean;
  photoUrl: string;
  plevel: string;
  stationName: string;
  superAdmin: boolean;
  thumbUpCount: number;
  userRoles: IUserRoleItem[];
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
