import React, { Component } from "react";

class PixivPicture extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="relative rounded-xl overflow-hidden h-full bg-center bg-no-repeat border-0 dark:border-4 dark:border-off-white2">
        <img class="max-h-full max-w-none bg-cover bg-center object-cover" src={`/pixiv/${this.props.pid}.webp`} />
      </div>
    );
  }
}

export default PixivPicture;
