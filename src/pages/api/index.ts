import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method=='GET')
        {
      try {
    // const http = require('http');
WebSocket
const essay = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit dolor non tempus viverra. Suspendisse convallis tellus eu erat venenatis, sed gravida erat pharetra. Suspendisse vel sollicitudin ex. Aliquam vitae consequat purus. Suspendisse aliquet finibus urna eget tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue elementum feugiat. Quisque accumsan posuere arcu at aliquam. Donec iaculis condimentum sem, eu mollis ligula mattis maximus. Sed viverra aliquam arcu, ac suscipit velit suscipit eget. Nulla vel est odio.

Vestibulum sit amet risus non risus aliquam euismod. Sed lacus libero, lobortis id orci vitae, pulvinar ornare purus. Morbi commodo, dolor quis accumsan dignissim, massa neque congue nibh, et pellentesque ipsum orci at eros. Suspendisse lectus sapien, aliquam quis est rutrum, posuere faucibus mauris. Cras id purus maximus, eleifend nisi sed, blandit tellus. Suspendisse in molestie magna, consectetur tincidunt metus. In sollicitudin congue nunc, bibendum aliquet eros tincidunt ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse blandit condimentum lobortis. Etiam sagittis varius metus quis convallis.

Morbi quis nibh vitae sem congue volutpat at a dui. Nullam ut ex magna. Vestibulum semper, tortor eget dictum viverra, tortor nibh vestibulum nulla, vitae egestas sapien ex ut urna. Suspendisse rhoncus condimentum orci, non eleifend ligula volutpat ut. Fusce iaculis elit nec magna pretium, nec luctus mauris malesuada. Morbi eleifend mauris vel placerat tempor. Praesent diam leo, consequat at felis vitae, tincidunt posuere ligula. Duis id pulvinar dui. Ut augue orci, volutpat at blandit at, vehicula sit amet risus. Sed non eros convallis, ultrices eros ac, tempus nulla. Nunc dignissim, lorem at gravida mollis, lorem tellus malesuada velit, et elementum ligula massa convallis eros. Nulla nec nulla leo. Nulla libero tortor, tempus eget massa eu, lacinia molestie urna. Nam pellentesque sem nec urna egestas tincidunt.

Vestibulum varius blandit rutrum. Nulla facilisi. Donec fringilla quis nulla at luctus. Fusce vehicula nulla ac sodales sagittis. Pellentesque mauris ante, congue vel erat et, maximus hendrerit nisi. In at accumsan urna, vel vestibulum nibh. Donec malesuada hendrerit egestas. Vestibulum ligula ligula, molestie vel turpis sit amet, accumsan placerat magna. Nunc ut ultricies libero, in ultricies erat. Sed at laoreet justo. Quisque at diam in sem fermentum sollicitudin pharetra et massa. Vivamus laoreet bibendum tortor in efficitur. Donec commodo vestibulum ante, id efficitur eros sodales in. Aliquam erat volutpat. Nullam at luctus sem. Nullam eleifend mollis eros, a venenatis enim pulvinar ac.

Nunc nisl lacus, eleifend at pellentesque eget, vulputate et est. Aliquam vel magna ante. In ante ante, tincidunt ac aliquam eu, efficitur vitae lacus. Nam fringilla urna ut elit maximus, sit amet feugiat velit gravida. Aliquam tincidunt ex eget purus porttitor pretium. Maecenas egestas maximus porttitor. Fusce velit ipsum, eleifend vel lacinia sit amet, porta non est. Praesent id nunc in nisi lacinia scelerisque.`;

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Encoding': 'none'

  });

  // Send the essay as a series of events
  const essayEvents = essay.split(' ').map((sentence, index) => {
    return `data: ${sentence}\n\n`;
  });

  // Send each event with a 1-second delay
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < essayEvents.length) {
      res.write(essayEvents[i]);
    //   res.write('event: '+i)
      i++;
    } else {
      clearInterval(intervalId);
    //   res.end();
    }
  }, 300);
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }}
  else
  {
    res.status(404).send({error:"INVALID API"})
  }
}
//http://localhost:3000/api/