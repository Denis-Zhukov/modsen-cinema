import { StyledNavItem } from './styled';

export const NavItem = ({ path, active, children }: {
    path: string,
    active?: boolean
    children: string,
}) => <StyledNavItem href={path} active={active}>{children}</StyledNavItem>;

NavItem.defaultProps = {
    active: false,
};
