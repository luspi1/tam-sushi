export const parsePathname = (pathname: string): string => {
	return pathname.split('/')[1]
}