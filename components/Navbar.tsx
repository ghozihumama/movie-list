import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
`;

const Navbar: FC = () => {
  return (
    <Nav>
      <div>
        <Link href={"/"}>
          <a>NEXT</a>
        </Link>
      </div>
      <div>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/contact"}>
          <a>Contact</a>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
