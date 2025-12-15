import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Users, DollarSign, Activity } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const stats = [
    {
        title: 'Total Users',
        value: '1,248',
        icon: Users,
        hint: '+12% this month',
    },
    {
        title: 'Revenue',
        value: '$8,420',
        icon: DollarSign,
        hint: '+8% growth',
    },
    {
        title: 'Activity',
        value: '342',
        icon: Activity,
        hint: 'Last 24 hours',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-1 flex-col gap-6 p-4"
            >
                {/* Stats cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Card className="rounded-2xl">
                                <CardContent className="flex items-center justify-between p-6">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            {stat.title}
                                        </p>
                                        <h2 className="text-2xl font-semibold">
                                            {stat.value}
                                        </h2>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {stat.hint}
                                        </p>
                                    </div>
                                    <stat.icon className="h-8 w-8 text-muted-foreground" />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Main content */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Chart placeholder */}
                    <Card className="lg:col-span-2 rounded-2xl">
                        <CardContent className="p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="font-medium">Overview</h3>
                                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
                                Chart goes here
                            </div>
                        </CardContent>
                    </Card>

                    {/* Activity feed */}
                    <Card className="rounded-2xl">
                        <CardContent className="p-6">
                            <h3 className="mb-4 font-medium">Recent activity</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li>New user registered</li>
                                <li>Payment completed</li>
                                <li>Password updated</li>
                                <li>Profile edited</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </AppLayout>
    );
}
