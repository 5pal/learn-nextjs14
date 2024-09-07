export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <h1>&copy about page</h1>
        </div>
    );
}
