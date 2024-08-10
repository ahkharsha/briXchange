import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container className="dark:bg-black" style={{borderRadius:"0px 0px 10px 10px"}}>
      <Footer.Copyright href="#" by="Unmani Shinde™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">Built for Hacker House Goa 2024</Footer.Link>
        {/* <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link> */}
      </Footer.LinkGroup>
    </Footer>
  );
}
