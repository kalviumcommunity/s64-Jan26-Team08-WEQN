export const dynamic = 'force-dynamic';

async function getServerTime() {
  try {
    const res = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch time');
    const data = await res.json();
    return data.utc_datetime;
  } catch (err) {
    return 'Error fetching time';
  }
}

export default async function DynamicPage() {
  const time = await getServerTime();
  return (
    <main>
      <h1>Dynamic Rendering Example</h1>
      <p>This page is dynamically rendered on every request. Data is always fresh.</p>
      <p>UTC Time: {time}</p>
    </main>
  );
}
