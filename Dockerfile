FROM oven/bun:1.1.20
WORKDIR /app

RUN useradd -ms /bin/sh admin
RUN chown -R admin .
COPY --chown=admin . .
USER admin

RUN bun install --production --ignore-scripts

ENV PORT 8080
CMD [ "bun", "--filter", "app", "start" ]
