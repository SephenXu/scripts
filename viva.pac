function FindProxyForURL(url, host) {
    // our local URLs from the domains below example.com don't need a proxy:
    if (shExpMatch(host, "*.api.xiaoying.co"))
    {
        return "PROXY 10.0.34.21:8888; DIRECT";
    }

	   if (isInNet(host, "10.0.0.0","255.255.252.0"))
    {
        return "PROXY 10.0.34.21:8888";
    }
    // All other requests go through port 8080 of proxy.example.com.
    // should that fail to respond, go directly to the WWW:
    return "DIRECT";
}