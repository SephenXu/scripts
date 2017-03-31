function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.api.xiaoying.co"))
    {
        return "PROXY 10.0.34.21:8888; DIRECT";
    }

    return "DIRECT";
}