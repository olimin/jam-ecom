exports.handler = async (event, context) => {
  const status = await {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi there Tacos',
      event
    })
  }
  return status
}
