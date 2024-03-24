import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export function NavbarComponent() {
    const github_url = 'https://github.com/JulianVillamizarDev/text-translate-app'
    return (
        <Navbar isBordered >
            <NavbarBrand>
                <h1 className="font-semibold text-xl">Translator</h1>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href={github_url} isBlock target="_blank" showAnchorIcon>GitHub</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}