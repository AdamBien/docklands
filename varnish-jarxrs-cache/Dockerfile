FROM airhacks/varnish
RUN rm /etc/varnish/default.vcl
COPY default.vcl /etc/varnish/
COPY start.sh .
RUN chmod a+x start.sh
EXPOSE 6081
ENTRYPOINT start.sh



