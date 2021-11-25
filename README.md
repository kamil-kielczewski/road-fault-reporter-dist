# road-fault-reporter-dist

Online working version [HERE](https://kamil-kielczewski.github.io/road-fault-reporter-dist/)


# Trouble shooting

1 . If we have error on github>settings>pages when set up custom domain:

> Domain's DNS record could not be retrieved. For more information, see Learn more (InvalidDNSError). We recommend you change this to a CNAME record pointing to user-name.github.io.


then in our domain provider remove record
www.my-domain.com Type=TXT TTL=0 Value="3|welcome"

and add
www.my-dmain.com TYPE=CNAME TTL=0 Value=my-dmain.com.
(Subdomain = www) (Value must be with dot at the end, and without quotes)
