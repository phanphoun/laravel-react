import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    ShoppingBag,
    Truck,
    ShieldCheck,
    CreditCard,
    Twitter,
    Github,
    Linkedin,
} from 'lucide-react';

/* ------------------ Motion Variants ------------------ */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
};

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage<SharedData>().props;

    const features = [
        {
            icon: <ShoppingBag className="h-6 w-6" />,
            title: 'Wide Product Range',
            desc: 'Browse quality products from trusted sellers in one place.',
        },
        {
            icon: <Truck className="h-6 w-6" />,
            title: 'Fast Delivery',
            desc: 'Quick and reliable shipping to your doorstep.',
        },
        {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: 'Secure Shopping',
            desc: 'Your data and payments are always protected.',
        },
        {
            icon: <CreditCard className="h-6 w-6" />,
            title: 'Easy Payments',
            desc: 'Multiple payment options for a smooth checkout.',
        },
    ];

    return (
        <>
            <Head title="Shop & Buy" />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

                {/* ---------------- Navbar ---------------- */}
                <header className="sticky top-0 z-50">
                    <div className="absolute inset-0 -z-10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-800" />
                    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                        {/* Logo */}
                        <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-md">
                                🛒
                            </span>
                            <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                                Shop<span className="font-black">&</span>Buy
                            </span>
                        </h1>

                        {/* Actions */}
                        <nav className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] transition dark:bg-white dark:text-slate-900"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-full px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* ---------------- Hero ---------------- */}
                <section className="relative overflow-hidden py-32 lg:py-40">
                    {/* Background blobs */}
                    <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
                    <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-slate-400/20 blur-3xl" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-center">

                        {/* ---------------- Text ---------------- */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block mb-4 rounded-full bg-green-500/10 px-4 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                                Modern E-Commerce Platform
                            </span>

                            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white mb-6">
                                A Smarter Way to{" "}
                                <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                                    Shop Online
                                </span>
                            </h2>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
                                <strong className="text-slate-800 dark:text-slate-200">
                                    Shop & Buy
                                </strong>{" "}
                                is a modern e-commerce platform built with Laravel, React, and Tailwind
                                CSS — fast, secure, and delightful to use.
                            </p>

                            {!auth.user && (
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={login()}
                                        className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:shadow-2xl transition dark:bg-white dark:text-slate-900"
                                    >
                                        Start Shopping →
                                    </Link>

                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="rounded-xl bg-white/70 backdrop-blur px-8 py-4 text-sm font-semibold text-slate-900 border border-white/20 dark:bg-slate-900/60 dark:text-white"
                                        >
                                            Create Account
                                        </Link>
                                    )}
                                </div>
                            )}
                        </motion.div>

                        {/* ---------------- Product Visual ---------------- */}
                        <motion.div
                            variants={fadeScale}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex justify-center"
                        >
                            <div className="relative h-[32rem] w-[32rem] flex items-center justify-center cursor-pointer">
                                {/* Enhanced glow effect */}
                                {/* <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-tr from-green-500/30 to-emerald-400/30 blur-3xl" /> */}
                                <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-green-400/10 to-emerald-300/10 blur-2xl" />

                                {/* Enlarged product image */}
                                <img
                                    src="https://shopmontigo.com/cdn/shop/files/MTAce32ozFrozen.png?v=1755761300"
                                    alt="Ocean Bottle Product"
                                    className="relative w-80 h-80 object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-screen transform transition-transform hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </motion.div>

                    </div>
                </section>


                {/* ---------------- Features ---------------- */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.h3
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-4xl font-extrabold text-center mb-16"
                        >
                            Why Choose{' '}
                            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                                Shop & Buy
                            </span>
                        </motion.h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    whileHover={{ y: -8 }}
                                    className="rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-slate-700 shadow-lg p-8"
                                >
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-green-500 to-emerald-400 text-white">
                                        {f.icon}
                                    </div>
                                    <h4 className="text-base font-semibold mb-2">{f.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {f.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- About ---------------- */}
                <section className="py-28 px-6 bg-slate-50 dark:bg-slate-900/40">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <h3 className="text-4xl font-extrabold mb-6">
                                About{' '}
                                <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                                    Shop & Buy
                                </span>
                            </h3>
                            <div className="h-px w-24 bg-gradient-to-r from-green-500 to-emerald-400 mb-6" />
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-4">
                                Built for speed, simplicity, and trust — Shop & Buy delivers a premium online
                                shopping experience.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 max-w-lg">
                                Discover products, checkout securely, and shop with confidence.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeScale} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex justify-center">
                            <div className="rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-slate-700 px-16 py-14 text-center shadow-2xl">
                                <p className="text-6xl font-black bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                    10k+
                                </p>
                                <p className="mt-2 text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">
                                    Happy Customers
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ---------------- Footer ---------------- */}
                <footer className="py-20 px-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <h4 className="font-extrabold mb-4">🛒 Shop & Buy</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                                Fast, secure, modern e-commerce.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-widest mb-4">Links</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href={login()}>Login</Link></li>
                                <li><Link href={register()}>Register</Link></li>
                                <li><Link href={dashboard()}>Dashboard</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-widest mb-4">Support</h4>
                            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                <li>Help Center</li>
                                <li>Privacy Policy</li>
                                <li>Terms</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs uppercase tracking-widest mb-4">Social</h4>
                            <div className="flex gap-4">
                                <Twitter className="h-4 w-4" />
                                <Github className="h-4 w-4" />
                                <Linkedin className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-xs text-slate-500 mt-12">
                        © {new Date().getFullYear()} Shop & Buy. All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}
