import React from "react"
import {
  PocketShareButton,
  PocketIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

const ShareButtons = ({ title, url }) => {
  return (
    <div>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <PocketShareButton url={url} title={title}>
        <PocketIcon size={40} round={true} />
      </PocketShareButton>
    </div>
  )
}
export default ShareButtons
