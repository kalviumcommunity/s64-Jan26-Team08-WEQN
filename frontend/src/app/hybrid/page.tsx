export const revalidate = 60;

async function getServerTime() {
  try {
    const res = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
    if (!res.ok) throw new Error('Failed to fetch time');
    const data = await res.json();
    return data.utc_datetime;
  } catch (err) {
    return 'Error fetching time';
  }
}

export default async function HybridPage() {
  const time = await getServerTime();
  return (
    <main>
      <h1>Hybrid Rendering Example (ISR)</h1>
      <p>This page uses Incremental Static Regeneration. Data updates every 60 seconds.</p>
      <p>UTC Time: {time}</p>
    </main>
  );
}
