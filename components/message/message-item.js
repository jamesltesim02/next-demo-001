import { observer } from 'mobx-react'

import dateFormat from '../../utils/dateFormat'

export default observer(({ message }) => (
  <li className={message.readed ? '' : 'un-read'}>
    <div className="content">
      <h3>{message.title}</h3>
      <p>{message.content}</p>
    </div>
    <div className="sender">
      <time>{
        dateFormat(message.sendTime, 'MM/dd HH:mm')
      }</time>
      <span>{message.from}</span>
    </div>
    <div>
      {
        message.readed
        ? null
        : <button>标记已读</button>
      }
    </div>
    <style jsx>{`
      li {
        list-style-type: none;
        display: grid;
        grid-template-columns: 7fr 2fr 1fr;
        align-items: center;
        color: #929292;
        width: 100%;
      }
      li.un-read {
        color: #2f2a2a;
      }
      li .content {
        width: 70%;
      }
      li .sender {
        width: 20%;
      }
      li h3, li p {
        padding: 0;
        margin: 0;
        width: 100%;
      }
      li time, li span {
        display: block;
        text-align: center;
        font-size: 12px;
      }
      li h3 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      li p {
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 36px;
      }
    `}</style>
  </li>
))