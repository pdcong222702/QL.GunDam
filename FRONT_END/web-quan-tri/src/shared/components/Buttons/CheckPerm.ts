export function CheckPerm(perm?: string | string[]) {
    if (Array.isArray(perm)) {
        return true;
    }
    return true;
}