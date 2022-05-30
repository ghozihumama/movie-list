import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.a`
  padding: 0rem 2rem;
`;

const Navbar: FC = () => {
  return (
    <Nav>
      <div>
        <Link href={"/"} passHref>
          <MenuItem>NEXT</MenuItem>
        </Link>
      </div>
      <div>
        <Link href={"/"} passHref>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href={"/about"} passHref>
          <MenuItem>About</MenuItem>
        </Link>
        <Link href={"/contact"} passHref>
          <MenuItem>Contact</MenuItem>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
