const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, mesage, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('This is an embed')
        .setURL('https://www.youtube.com/watch?v=ok91NNEiUZ0&list=PLCgC6Lz08u0wdLtoZznLQ40hNm_6J4XSN&index=9')
        .setAuthor('Agent Zonely :pepe:')
        .setDescription('Hosted by ```@Agent Cheese#5391```')
        .setDescription('Winner ```nobody lol```')
        .setColor('#FF0000')
        .setImage('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0NDQ0NDQ0NDQ0NDg8NDQ0NFREWFhURExUYHSggGBolGxUVITEhJSkrLi4uFx8/ODQsNygtLisBCgoKDg0OFQ8PFSsdFR0tLSsrKy0rKysrKy0rLSstKysrKy0rKysrKysrKy04LS0tLS00LS0rKy0tLS0tKystK//AABEIANIA0gMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYDBAUCB//EADwQAAIBAgEGCgcIAwEAAAAAAAABEQIDBQQTITJRcQYSFSIxM1JykbEUFkFhgpLBIzRTYnOB0fAkQqFD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEEBQMCBv/EACgRAQACAQMEAgIDAQEBAAAAAAABAgMEETESEzJRFCEzcSJBUhWBI//aAAwDAQACEQMRAD8Ag+affAAAAAAAACAEAIAQAgAAAQAABIAAAAICCQIJCQJASEhCCQkASSgkgJJSSAkgJCCQEhJICQEgTIESBMgJASEEhKGACEEgBAACQBAAABIAAAAABIAAQIJACQIAAAAAAAAAAAABIAAAkBIEAAAAAAkCZAgBACAJkBIAAAAAAAACAJASB5kAAAAAEgJA5eLYrTYXTpO2LFNnDLmikK1c4VVS48y5GkhnTr435efWur+sn4kI/wChHs9a6v6x8SD/AKEez1rq/rHxIP8AoR7b2G8JuPUlV5nLJpdo+nfDrYtK02r6qp4yeiJKU12nZoRaJjdwcY4QK02k/wDpaxaebKmbVRRxvWur+ssfEhT/AOhHs9a6v6x8SD/oR7djCOEKutJ+ZXy6fpW8Gqi6x01SpRUXt0gJASAkBIEAAAEBAAAAAAHMxbFKbNL06TtixTaXDLmikKDi2JVX6np0SamPHFYYWp1HX9QwZLkiuU8Z1NaWug9WttLljxRaN2bk1dt+B57j38ePZyau2/Adw+PHs5NXbfgO4fHj206vs62k9V9J0j7hx/Hf6/pYsPx9023S37IKmTT7zu1cWr3q4WI385cdUlmldo2Z2pv1WZqcPTSfGelJ9BHceuxHseHJJ85+BHcOxHtjwu46btMP2nrJG9UaW0xd9OyCubdOkxrx9vpMc/xbMnh0JASAASACACJAEiAACQAHNxbElZpenSdsWKbS4ZssUhQcUxGq9U9Og08eOKwwtRqOv6hhyTJFcpbba0xoPVrbOWPFFo3lv5PZVunipzpnSc5ndYpXpjaGvlOWVUVulJNKOmdh6rSJjdyvlms7bMXKNXZp/wCnrtw8/In03snuceimp6G9hzmNp2WKzvESwXchVVTq4zUufYTF9nO2GLTvu51xcWqpL2NrwZ1j7hVn+MzEPBLy7tvVp3LyK8tGE19D3MDiWq+K00WJjdRpfpnd2sn4Q10JL2IrW08TLQrrtoWLBceV1pVMq5sHTwv4NTF1ipqlSiovbpkBICQIAARIQkJAhACQIbAo/C64+NEmlpY+mRrrTs4eRZMribbehxoLNrbM7Fji0by6FiyrahT0zpOczusVrFY2hkPLpEbte9kdNdTqbcuOg9ReY+ni2Ctp3lYMI4JZPfsUXK6rqqqmeLVSloe4p5dZel5iIh2po8cxvLr2uCuT0UqlO7C21KfI4TrMkzv9O0aekRtD16s5PtufMv4I+XdPYq1K+BWS1Nvj3tLb1qfb+x7jX5PUOc6LHM7o9SMl7d/5qf4Hz8nqEfCxNxcGMnSSm5o0ay/g8fMu6/HqPgxk+258y/gfLudirT9SMl7d/wCan+D38/J6hy+Fia+IcDsmtWLtymu9xqLddamqmJSnYe8etyWtETEfbzfR44rMqTkuUO3Ummadq7wzsWWaSu+A40riVLekzs2Db7bun1EWhY05Ki6kCAEgQ2BEkiZICSQAiQDCFF4W65paXhj6/hzcL1at68jtk5U8HjLdOazEbt7Iskpro41UzLWhnG95iXStY2bHJ1v83ijx3bPXTDs4ffdq1TbpjiqYnS+krZKxa28ulbTEbLFkdtV26K6umpS46Cje01tMQ9dcthZLT7/E8dyTrk9Fp9/iR3JOuT0Wn3+I7knXJ6LT7/EdyTrlk9Co/N4kd2x1yehUfm8R3bHXLDlmG27lq5RVxoroqpcPTDR6pntFolHVM/UqFjHBLJrGTXr1FV7jW7dVVPGrpalbdBsYdZkvetZ22lWy6THWlrRzCsYFW1dUbS/mj+Kvo5/k+k2HzVuMi3L6CvDIeXokCCQCEAAEgSBEgQwKNws1zS0vDH13DnYXq1b15HbJyp4PGW6cpW68OvhS+z+J/Qr5eXuG2zm9Nizqo525StOGdRb7v1M7L5yluo5AQAAD1xmNhkPI8XtWrcya8wmOVV4S/ccq/RqNPTflr+06j8Vv0+b4L1q3o28vizdH5PpOT6i3GPbl9BXhkIegBIENgRIQSAkCZCUSEDZIo/CvXNLTcMjXcOdherVvXkdcnKng8Zbpylbrw7GE9V8T8kV8vL3DaqOb02LOqjnblK04Z1Fvu/UzsvnKW1JzHtEAQAAD1xmNh4vVPi1bmTWPuExyqvCOp+hZT+lUaenj/wCtf2Z/x2/T53gvWrejZy+LO0fk+kZO+Ytxj25fQV4ZJIeiQIkICR5kCZAiQJkCAgbApHCrXNLTcMjXcOfherVvXkdcnKpg8Zbpylbrw7GE9V8T8kV8vL3Dcg5pZ7XQjnblMLRhnUW+79TOy+cvTaOY9ogCAAAAMeUv7OvuvyPdPKCFMx+7U8jyhT/5s1cER3KvOaZ7dv0o2Ddat6NXL4qOj8n0fJ3zKdxkW5b9eGSSHokCAgkCAJAgBIAAwKRwp1zS03DI13DQwvVq3ryOuTlUweMt05St14dTDamrfxP6HDJy6Q36HoOQ2LfQc7cphaMM6i33fqZ2Xzl6bRzCQPZAEAAAx5T1dfdq8j3TygUnHvumUfps1sH5KvGb8dv0pOD9at5qZfFR0nk+i5O+YtxkTy368MpD0gAACEAAAAABDZIpPCnXZo6bhka7ho4Xq1b15HXJyq4PGW6cpW68Onh2p8T+hwycukcN+30HIls2+g525TC0YZ1Fvu/UzsvnL02jmACQN9UKOhdGxH1EafD2t+iN9vUenz05snXt1zz7lpny0voICEseU9XX3avI908oFJx77plH6bNbB+Srxm/Hb9KTg/WrejUy+KjpPJ9Eyd8xbjJty368MknlJIEACRAQmQkCESAkCGwKXwo12aWm4ZOt4aOF6tW9eR0ycquDxlunKVuvDp4dqfE/ocMnLpHDft9ByJbNvoOduUwyq5UtCqqS9zZ52j0lOeq7VXzMdMegz1Xaq+Zjpj0Geq7VXzMdMeh87qy29nH9td1/xKtu82to2Y8xHc/9fQ6L1cLn1dC/2ZizWPTYTnq+3V8zHTHoHdq7VXix0x6HOxx/4t/9NnbB+Srnl8LfpTsI61Gll8VPSeT6Hk75q3GTblvV4ZZISiQIkCZAgBICQIkBJKESEq7whyB185It4Mm30o6nF1Qqdyh0OHKL0Tuxr1tSdnQw18x95nLJyuaef4O9h2p8T+hUycrUcN+30HIls23oPE8phZsNoTs23CfN2LaZ2WZ65em1m12V4I57z7DN09leCG8+wza7K8EN59ijVZIs6/sl1j/0/NuPpYtHRz/TDnq6v/V4VumFzV4I+bmZ9tyE5unsrwRG8+xiyq2s3XzVq1exbD1SZ6oFJxz7rf8A02a2D8lXLL4W/SnYT1qNLJ4qek8n0LJ3zVuMq3LdrwySeXokDzJKEyBEgRICQEgJASB5uUpppkxKJjdRsetqmtwaeCd4Y+siIecM1H3mMnLzpvB3sO1Pif0KmTlbjhv2+g5EsF585nqBdsDf+LZ7n1Zk6j8lnqHSpqUdK8SvMSl5ZI98ZbV4kbSMcL3HreRHGW1DaRIGHK6lm69K1KvI90ieqBRMcf8Ai3+4zXwfkq5ZfC36U7CetRp5PFT0nk+g2HzVuMm3LdrwyEJJAiQEgJA8ySgkBICQEkA3oJFI4Q9YzSwcMjWseGaj7zJycvGm8Hew7U+J/QqZOVuOG0c0uflWu/2O1OHmVwwWtejWdK1dvvZmZ4nuWeoeL759W8914h7jh3slvUK3bTrpTVFH+y2Io3rPVP0hwLutV3n5l+OIelgV6jiLn06vaWwodNt+HlXlrfuX/wCnpYb96jiV8+nVq/2WwoVrO8fTyrV7Vq3M0I5epV3Fvu93uFzF5wr5fC36VvCusReyeKnpPJf7D5q3GTblu14ZJISSBEkhICQPMhBICQEgTIEN6AKVwh12aWDhk61gw65SqGm0ud7WeskTMuentEV+5d3Dr1Ob1qdZ+3cVMlZ34W6zEx9NrPU9qnxPHTPp6aWU1J1tpytB1rw8y7+HXKVZtp1Lo2+8qZInql0rP02c7T2l4o57S9bmdp7S8UNpNzO09peKG0m5nae0vFDaTcztPaXihtJuZ2ntLxQ2k3Y796lUVN1UxxX7VsPURO8fSJmNlbxPKrdVi6lcobdOhKpSy5jpaLx9K2W9ei33/Tg4V1iLmThV0nkv1jVW4yrctyvD2Q9AESEEgTIHmQgAAAAADg43h3H5yLeHLt9KmfD1Qq1+y6HDLsTuyMmOaS3MgvU00RVUk+M+n9jneszP0sYL1iu0y2fSrfbR46Z9O/dp7ZKMrtxr0nmaW9J7tP8ATfsYjZVKTu0zBytivvw9Rlp/qGTlOx+LQee1f0d2n+oOU7H4tA7V/R3af6g5Tsfi0DtX9Hdp/qDlOx+LQO1f0d2n+oOU7H4tA7V/R3af6g5Tsfi0DtX9Hdp/qGHLMQs1WriV2lt0VJLa4PVMd4tH083y06Z/lCrUUOpwi/Ms2tZtO0LDguGOVU0VM2X+mrp8HStFKhQUl+EyQkkAEAADzJKCQEgJASAkCGk9DA4WMYXxpdKLWLLtyq5sMWhwKsOrT6C33IZ06WzzyfXsHcg+LZPJ9ewdyD4tjk+vYO5B8WxyfXsHcg+LY5Pr2DuQfFscn17B3IPi2OT69g7kHxbHJ9ewdyD4tjk+vYO5B8WwsOr2DuQfFs62E4S5TqRwy5vS5g0/Ss1uhUqEUpndfiNnuSEkgJAiQgkBIHmQgkBICQEgJASAZI8ZqnYid5RtBmadiG8m0GZp2IbybQZmnYhvJtBmadiHVJtBmadiHVJtBmadiHVJtBmadiHVJtBmadiHVJtBmadiHVJtBmadiI3k2h7pSXQEpISAJASBEhBICQIklCJASBMgJAiQJkBICQEhIEEhJIQSAkJJASAkBICQEgJASAkCJCCQJkDyACAAAkBISSEEhJICQAAAAAkAAAAAAAABISAQEAACAAAIAAEAAAEgAASBAEgAABIAAAAAQBIACAEhAACQAEAACCQAAAAEkAACQAAAkAAAAAIAmQEgGBEhAEoJeQJAAAAAAEAAAkCAJAAACABIEASAAIJQICUQkYHklCQh/9k=')
        .setThumbnail('https://i.ytimg.com/vi/TsIUpEczWgs/maxresdefault.jpg')
        .setFooter('```HI LOL```')

    message.channel.send(embed)
}

module.exports.config = {
    name: "Embeds",
    description: "",
    usage: "?embed",
    accessableby: "Agents",
    aliases: ['']
}