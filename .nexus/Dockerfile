# as casc-build
FROM maven:3.6.3-openjdk-8 as build

WORKDIR /build

RUN git clone https://github.com/AdaptiveConsulting/nexus-casc-plugin . \
 && git checkout 37ce78e19c32b2b685f75451043f909a5ffc06c3
RUN mvn package

FROM sonatype/nexus3:latest

ENV NEXUS_CASC_CONFIG=/opt/nexus.yml

COPY --from=build /build/target/nexus-casc-plugin-3.29.0-02-bundle.kar /opt/sonatype/nexus/deploy/nexus-casc-plugin.kar
