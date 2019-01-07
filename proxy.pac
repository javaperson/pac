function FindProxyForURL(url, host)
{
    if (isInNet(host, "10.130.0.0", "255.255.0.0"))
        return "SOCKS 192.168.43.1:1080";
 
    return "DIRECT";
}