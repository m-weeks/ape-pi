# ape-pi
An HTTP API for converting text into a .wav file of Bonzi Buddy's voice

# Instructions

Run the docker image `wmweeks/ape-pi`. The default port is 3000, but can be customized through the `PORT` env variable.

To retrieve a voice, make a request to `/api/bonzi` with the GET parameter `text`.

ex: `/api/bonzi?text=hello`
