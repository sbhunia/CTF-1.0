from scapy.all import *

def generate_pcap_with_plaintext_flag(flag):
    # Create an Ethernet frame with source and destination MAC addresses
    ethernet_frame = Ether(src="00:11:22:33:44:55", dst="66:77:88:99:AA:BB")

    # Create an IP packet with source and destination IP addresses
    ip_packet = IP(src="192.168.1.1", dst="192.168.1.2")

    # Create a TCP segment with the flag in the payload
    tcp_segment = TCP(dport=80, sport=12345, flags="A", options=[])
    
    # Add payload to the TCP segment using the Raw layer
    raw_payload = Raw(load=flag)
    
    # Combine the layers to form the complete packet
    packet = ethernet_frame / ip_packet / tcp_segment / raw_payload

    # Write the packet to a PCAP file
    wrpcap("plaintext_flag_challenge.pcap", [packet])

# Define the flag in plaintext
plaintext_flag = "MUCTF{baby_shark_do_do}"

# Generate the PCAP file with the plaintext flag
generate_pcap_with_plaintext_flag(plaintext_flag)
