export const revalidate = false;

export default function StaticPage() {
  return (
    <main>
      <h1>Static Rendering Example</h1>
      <p>This page is statically rendered at build time. Data will not update until the next build.</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </main>
  );
}
