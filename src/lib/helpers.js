const loadScript = function(
  scriptUrl = '',
  scriptId = '',
  callback = null,
  error = null
) {
  const exists = document.getElementById(scriptId)

  if (!exists) {
    const script = document.createElement('script')
    script.src = scriptUrl
    script.id = scriptId
    script.async = true
    document.head.appendChild(script)
    if (script.readyState) {
      script.onreadystatechange = () => {
        if (
          script.readyState === 'loaded' ||
          script.readyState === 'complete'
        ) {
          script.onreadystatechange = null
          if (callback) callback(null)
        }
      }
    } else {
      script.onload = () => {
        if (callback) callback(null)
      }
      script.onerror = function() {
        error('Error loading ' + this.src)
      }
    }
  } else {
    if (callback) callback(null)
  }
}
module.exports = {loadScript}
