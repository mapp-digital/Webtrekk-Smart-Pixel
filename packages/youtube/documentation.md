# Embedded YouTube Tracking

This Mapp Smartpixel plugin allows you to track play, pause, seek, position and end mediarequests of embedded YouTube videos.
The plugin provides a zero-config implementation but can also be customized: you can add event parameters to the media request, add media categories and customize the title of the video.

## Zero config implementation

The zero config implementation is just as simple as loading the plugin script, loading Smartpixel, and running the `activate()` method `after` the YouTube video(s) are loaded.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Smartpixel Youtube tracking</title>
        <script src="/link/to/smart-pixel.min.js"></script>
        <script src="/link/to/smart-pixel-youtube.min.js"></script>
    </head>
    <body>
        <script>
            wtSmart.init.set({
                trackId: "12345678910111213",
                trackDomain: "mapp-trackdomain.wt-eu02.net",
            });
            wtSmart.track();
        </script>
        <h1>Smartpixel Youtube tracking</h1>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zZZLfd-9shk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </body>
    <script>
        wtSmart.extension.youtube.activate();
    </script>
</html>
```

This code allows you to track mediaevents of the YouTube video. You can have several YouTube videos on your page. The title of the video is used as mi parameter (=> video title in Mapp Intelligence).

## Limitations

Changing the volume or muting the video does not fire events, so the tracking does not occur immediatly, but the updated values are in the next request, for example in the next position request.  
Videos that are embedded via privacy enhanced mode (from domain youtube-nocookie.com) will not work, because they are not supported by the YouTube API.

## Dynamic YouTube iFrames

If you load a YouTube IFrame dynamically after you ran the activate method, it will not be tracked automatically. You need to inform the plugin that a new element is available by running

```js
wtSmart.extension.youtube.install();
```

You can also run the install method after you removed a YouTube iFrame element.

## Deactivate YouTube tracking

To deactivate tracking of YouTube videos, simply run

```js
wtSmart.extension.youtube.deactivate();
```

## Check if activated

To check if the plugin is currently activated, run

```js
wtSmart.extension.youtube.isActivated();
```

## Optional loading optimization

If you take a close look at your website, you'll see that the YouTube iFrame reloads as soon as you run the `activate()` or `install()` methods.  
This happens because the plugin has to add the url query parameter `enablejsapi=1` to the YouTube URL. Without that parameter, the media events are not available.  
You can avoid the reloading by adding this parameter to your YouTube embed code yourself. So instead of

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/zZZLfd-9shk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```

you embed the video like this on your website:

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/zZZLfd-9shk?enablejsapi=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```

## Advanced configuration

It is possible to configure the plugin further to change the mi parameter (video title), add media categories (mg) and add event parameters (ck) to media requests.

## Configuration via attributes

You can set the media title and media categories via attributes. All you have to do is to add `data-title` or `data-categoryX` to the iFrame element, while `X` is the number of the category. So to set a value for media category 7, you add the attribute `data-category7`.

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/zZZLfd-9shk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    data-title="My custom media title"
    data-category7="My media category 7 value"
></iframe>
```

## Configuration via JavaScript

You can also add a configuration object as argument to the `activate` method or you can call the `config` method to update the configuration. If both attributes and JavaScript configuration is available, the attribute values are used.

| Key        | Type              | Default value |
| ---------- | ----------------- | ------------- |
| title      | string / function | YouTube title |
| categories | object / function | none          |
| action     | object / function | none          |

You use strings and objects if you have static data and just one video on your page:

```js
wtSmart.extension.youtube.config({
    title: "My title",
    categories: {
        1: "Embedded YouTube Video",
        22: "value of media category 22",
    },
    action: {
        3: "ck3 value",
    },
});
```

Now, on the initial media request, the title and category is attached to the video data. Also, every media request will have ck parameters with the values defined in the config.  
However, most of the time you will want to have actions to be more dynamic, for example only during seek events, or just when the video is muted or over a certain position etc. Also, if you have sevaral videos on your page, with the static configuration from above, now all your videos would have the title "My title".  
For that reason, you can define functions, that need to return the configuration value, but they receive the `YouTube player object` and in case of the actions, the `media event name`.

| Key        | Arguments                        |
| ---------- | -------------------------------- |
| title      | YouTube player                   |
| categories | YouTube player                   |
| action     | YouTube player, Media event name |

Here are some of the YouTube player values that might be interesting for you:
| Method | Info |
| ----------- | ----------- |
| player.getVideoData().video_id | YouTube id |
| player.getVideoData().title | YouTube title
| player.getCurrentTime() | current position |
| player.getDuration() | duration of video |
| player.getVolume() | current volume |
| player.isMuted() | mute state |
You can find more information about the YouTube API here: https://developers.google.com/youtube/iframe_api_reference

The second argument of the action function will be one of the strings `play`, `pause`, `seek`, `position`, `end`.

Here is an example configuration for a website that has two videos embedded, with customized titles, media category 1 based on the duration, and action parameter if the video was paused later than 10 seconds in:

```js
wtSmart.extension.youtube.activate({
    title: function (player) {
        switch (player.getVideoData().video_id) {
            case "zZZLfd-9shk":
                return "Mapp video 1";
            case "0Og7oA8DGPQ":
                return "Mapp video 2";
        }
    },
    categories: function (player) {
        if (player.getDuration() < 20) {
            return {
                1: "Short videos",
            };
        } else {
            return {
                1: "Long videos",
            };
        }
    },
    action: function (player, mediaEvent) {
        if (mediaEvent === "pause" && player.getCurrentTime() > 10) {
            return {
                1: "Paused later than 10 seconds",
            };
        }
    },
});
```

## Configuration example for Video Analytics

If you use Video Analytics in Mapp Intelligence, by default you need the following configuration: media category 1 (mg1) is the title of the video, media category 15 is the thumbnail url and the primary media indentifier is the video id.  
This can easily be accomplished by this configuration code:

```js
wtSmart.extension.youtube.activate({
    title: function (player) {
        return player.getVideoData().video_id;
    },
    categories: function (player) {
        return {
            1: player.getVideoData().title,
            15:
                "https://img.youtube.com/vi/" +
                player.getVideoData().video_id +
                "/hqdefault.jpg",
        };
    },
});
```
