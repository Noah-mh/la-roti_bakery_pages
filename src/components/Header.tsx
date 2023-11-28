import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const Header = () => {

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <a href="/" className="-m-1.5 p-1.5 flex">

                    <span>La Roti Bakery</span>
                </a>
                <div className="flex lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Open main menu</span>
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <a href="/" className="-m-1.5 p-1.5">

                                        <span >La Roti Bakery</span>
                                    </a>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <SignedIn>
                                            <a
                                                href="/cart"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                Cart
                                            </a>
                                        </SignedIn>
                                    </div>
                                    <div className="py-6">
                                        <SignedOut>
                                            <a
                                                href="/sign-in"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                Log in
                                            </a>
                                        </SignedOut>
                                        <SignedIn>
                                            <div className="leading-6">
                                                <UserButton afterSignOutUrl="/" />
                                            </div>
                                        </SignedIn>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                    <SignedOut>
                        <a href="/sign-in" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </SignedOut>
                    <SignedIn>
                        <a href="/cart" className="text-sm font-semibold leading-6 text-gray-900">
                            Cart
                        </a>
                        <div className="leading-6">
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </SignedIn>
                </div>
            </nav>
        </header >
    );
}

export default Header;