import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    // {
    //   type: "doc",
    //   id: "apis/mecha-cloud-apis",
    // },
    {
      type: "category",
      label: "Machines",
      items: [
        {
          type: "doc",
          id: "apis/update-machine",
          label: "Update machine details",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/machine-telemetry",
          label: "Add or update machine telemetry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-machine-logs-streams",
          label: "Get machine logs stream data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-machine-logs",
          label: "Get machine logs data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/export-machine-logs",
          label: "Export machine logs data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-machine-metrics",
          label: "Get machine metrics data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-machines",
          label: "Get machines list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-machine-by-id",
          label: "Get machine details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/check-alias-in-use",
          label: "Check alias is already used or not",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/remove-machine",
          label: "Remove machine",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Machine certificates",
      items: [
        {
          type: "doc",
          id: "apis/re-provision-certificate",
          label: "Re-Provision certificate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/re-issue-certificate",
          label: "Re-Issue certificate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-previously-signed-certificates",
          label: "Get previously signed certificates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-certificate",
          label: "Get active certificate details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/download-certificate",
          label: "Download certificate",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/download-ca-bundle",
          label: "Download CA-Bundle certificates",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Machine provision requests",
      items: [
        {
          type: "doc",
          id: "apis/get-status",
          label: "Get machine provision request status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/add-machine-provision-request",
          label: "Add machine provision request",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Networking",
      items: [
        {
          type: "doc",
          id: "apis/get-network-by-network-id",
          label: "Get network details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/update-network",
          label: "Update network",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/delete-network",
          label: "Delete network",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/set-network-as-default",
          label: "Set default network",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/get-networks",
          label: "Get list of networks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/add-network",
          label: "Add network",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/enable-node",
          label: "Enable network",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-network-nodes",
          label: "Get network nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/get-network-node",
          label: "Get network node details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/delete-network-node",
          label: "Delete network node",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/check-networks-node-dns-name",
          label: "Check DNS name in use for network nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/generate-ipv-4-address",
          label: "Generate IPV4 address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/check-networks-dns-name",
          label: "Check DNS name in use for networks",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "SSH",
      items: [
        {
          type: "doc",
          id: "apis/issue-ssh-certificate",
          label: "Issue SSH certificate",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
