// client code
export async function sendLog(log: string, level = 'info') {
  try {
    const response = await fetch('/api/log/send_log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ log, level }),
    })

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
